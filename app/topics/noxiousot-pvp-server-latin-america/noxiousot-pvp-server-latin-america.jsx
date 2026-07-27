import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-latin-america');
}

export default function NoxiousotPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-latin-america" />;
}
