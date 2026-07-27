import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-latin-america');
}

export default function LumineraHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-latin-america" />;
}
