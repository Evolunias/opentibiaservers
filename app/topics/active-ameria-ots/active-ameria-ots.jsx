import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-ots');
}

export default function ActiveAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-ots" />;
}
