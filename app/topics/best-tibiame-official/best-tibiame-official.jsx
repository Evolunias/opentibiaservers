import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-official');
}

export default function BestTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-official" />;
}
