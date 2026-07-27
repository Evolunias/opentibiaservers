import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-high-exp-server-latin-america');
}

export default function RealeraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-high-exp-server-latin-america" />;
}
