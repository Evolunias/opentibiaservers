import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-alternatives');
}

export default function RefugiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="refugia-alternatives" />;
}
