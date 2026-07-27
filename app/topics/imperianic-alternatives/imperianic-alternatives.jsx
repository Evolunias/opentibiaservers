import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-alternatives');
}

export default function ImperianicAlternativesKeywordPage() {
  return <StaticKeywordPage slug="imperianic-alternatives" />;
}
