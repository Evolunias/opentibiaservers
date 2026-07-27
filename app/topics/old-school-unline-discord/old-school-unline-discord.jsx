import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-discord');
}

export default function OldSchoolUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-discord" />;
}
