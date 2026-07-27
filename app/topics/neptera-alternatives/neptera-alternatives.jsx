import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-alternatives');
}

export default function NepteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="neptera-alternatives" />;
}
