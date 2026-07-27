import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-online');
}

export default function BestTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-online" />;
}
