import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-ot');
}

export default function PopularAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-ot" />;
}
