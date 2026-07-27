import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-discord');
}

export default function ActiveOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-discord" />;
}
