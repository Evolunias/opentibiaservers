import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-brazil');
}

export default function FreshStartPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-brazil" />;
}
