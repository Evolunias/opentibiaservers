import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-latin-america');
}

export default function UnlineEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-latin-america" />;
}
