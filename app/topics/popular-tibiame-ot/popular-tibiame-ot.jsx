import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-ot');
}

export default function PopularTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-ot" />;
}
