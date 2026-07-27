import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-ot');
}

export default function CustomAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-ot" />;
}
