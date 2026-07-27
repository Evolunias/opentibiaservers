import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-alternatives');
}

export default function RuberaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="rubera-alternatives" />;
}
