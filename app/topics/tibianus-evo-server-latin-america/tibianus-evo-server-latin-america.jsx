import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-latin-america');
}

export default function TibianusEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-latin-america" />;
}
