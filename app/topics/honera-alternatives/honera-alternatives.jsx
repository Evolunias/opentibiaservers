import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-alternatives');
}

export default function HoneraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="honera-alternatives" />;
}
