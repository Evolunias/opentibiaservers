import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-alternatives');
}

export default function EterniaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="eternia-alternatives" />;
}
