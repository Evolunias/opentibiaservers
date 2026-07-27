import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-discord');
}

export default function HighrateMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-discord" />;
}
