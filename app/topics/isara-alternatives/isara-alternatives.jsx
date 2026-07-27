import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-alternatives');
}

export default function IsaraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="isara-alternatives" />;
}
