import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-discord');
}

export default function CurrentMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-discord" />;
}
