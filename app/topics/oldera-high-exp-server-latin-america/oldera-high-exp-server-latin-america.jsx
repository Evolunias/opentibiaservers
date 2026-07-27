import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-high-exp-server-latin-america');
}

export default function OlderaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-high-exp-server-latin-america" />;
}
