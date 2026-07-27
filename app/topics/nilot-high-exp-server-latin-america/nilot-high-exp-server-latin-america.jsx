import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-high-exp-server-latin-america');
}

export default function NilotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-high-exp-server-latin-america" />;
}
