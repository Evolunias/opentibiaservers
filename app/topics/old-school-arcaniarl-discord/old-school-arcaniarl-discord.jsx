import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-discord');
}

export default function OldSchoolArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-discord" />;
}
