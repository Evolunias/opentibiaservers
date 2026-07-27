import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-discord');
}

export default function LowrateMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-discord" />;
}
