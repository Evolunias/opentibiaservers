import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-alternatives');
}

export default function EleraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="elera-alternatives" />;
}
