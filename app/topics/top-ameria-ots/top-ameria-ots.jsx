import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-ots');
}

export default function TopAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-ots" />;
}
