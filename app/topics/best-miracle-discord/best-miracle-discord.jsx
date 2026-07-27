import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-discord');
}

export default function BestMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-discord" />;
}
