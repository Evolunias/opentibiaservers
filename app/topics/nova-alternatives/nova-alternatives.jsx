import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-alternatives');
}

export default function NovaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nova-alternatives" />;
}
