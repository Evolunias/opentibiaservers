import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-alternatives');
}

export default function ForteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="fortera-alternatives" />;
}
