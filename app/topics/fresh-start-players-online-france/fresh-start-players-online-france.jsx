import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-france');
}

export default function FreshStartPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-france" />;
}
