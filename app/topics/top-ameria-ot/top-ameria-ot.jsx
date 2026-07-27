import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-ot');
}

export default function TopAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-ot" />;
}
