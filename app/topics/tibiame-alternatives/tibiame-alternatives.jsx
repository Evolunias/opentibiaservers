import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-alternatives');
}

export default function TibiameAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiame-alternatives" />;
}
