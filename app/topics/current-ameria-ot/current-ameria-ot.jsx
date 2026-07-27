import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-ot');
}

export default function CurrentAmeriaOtKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-ot" />;
}
