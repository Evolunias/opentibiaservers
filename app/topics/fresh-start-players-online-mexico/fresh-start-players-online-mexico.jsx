import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-mexico');
}

export default function FreshStartPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-mexico" />;
}
