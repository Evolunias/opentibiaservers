import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-latin-america');
}

export default function OriginaltibiaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-latin-america" />;
}
