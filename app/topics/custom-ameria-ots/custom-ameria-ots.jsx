import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-ots');
}

export default function CustomAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-ots" />;
}
