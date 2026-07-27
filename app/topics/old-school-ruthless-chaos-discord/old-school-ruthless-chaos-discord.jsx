import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-discord');
}

export default function OldSchoolRuthlessChaosDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-discord" />;
}
