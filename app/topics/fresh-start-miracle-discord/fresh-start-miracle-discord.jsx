import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-discord');
}

export default function FreshStartMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-discord" />;
}
