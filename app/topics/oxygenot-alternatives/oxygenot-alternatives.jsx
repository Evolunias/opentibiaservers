import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-alternatives');
}

export default function OxygenotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-alternatives" />;
}
