import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-alternatives');
}

export default function MediviaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="medivia-alternatives" />;
}
