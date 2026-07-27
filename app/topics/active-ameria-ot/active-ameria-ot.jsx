import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-ot');
}

export default function ActiveAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-ot" />;
}
