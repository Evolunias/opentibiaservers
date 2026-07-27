import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-latin-america');
}

export default function EvoClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-latin-america" />;
}
