import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-ots');
}

export default function CurrentAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-ots" />;
}
