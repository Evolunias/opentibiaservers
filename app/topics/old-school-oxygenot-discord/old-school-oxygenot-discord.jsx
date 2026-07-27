import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-discord');
}

export default function OldSchoolOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-discord" />;
}
