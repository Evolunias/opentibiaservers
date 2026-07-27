import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-alternatives');
}

export default function MeneraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="menera-alternatives" />;
}
