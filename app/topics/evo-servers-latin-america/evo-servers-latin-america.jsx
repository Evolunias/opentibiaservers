import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-latin-america');
}

export default function EvoServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-latin-america" />;
}
