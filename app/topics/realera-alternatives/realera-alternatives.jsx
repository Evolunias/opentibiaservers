import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-alternatives');
}

export default function RealeraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="realera-alternatives" />;
}
