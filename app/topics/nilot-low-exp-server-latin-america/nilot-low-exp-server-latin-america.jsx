import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-low-exp-server-latin-america');
}

export default function NilotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-low-exp-server-latin-america" />;
}
