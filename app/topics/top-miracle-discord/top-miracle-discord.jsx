import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-discord');
}

export default function TopMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-discord" />;
}
