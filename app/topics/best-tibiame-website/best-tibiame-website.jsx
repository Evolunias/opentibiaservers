import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-website');
}

export default function BestTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-website" />;
}
