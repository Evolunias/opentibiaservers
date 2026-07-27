import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-latin-america');
}

export default function EvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-latin-america" />;
}
