import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-alternatives');
}

export default function DoleraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="dolera-alternatives" />;
}
