import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-alternatives');
}

export default function AmeraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="amera-alternatives" />;
}
