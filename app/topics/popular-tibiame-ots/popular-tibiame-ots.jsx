import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-ots');
}

export default function PopularTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-ots" />;
}
