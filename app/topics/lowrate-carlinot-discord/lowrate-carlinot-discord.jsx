import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-discord');
}

export default function LowrateCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-discord" />;
}
