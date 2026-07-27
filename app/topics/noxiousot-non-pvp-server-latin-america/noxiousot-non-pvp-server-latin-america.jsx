import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-latin-america');
}

export default function NoxiousotNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-latin-america" />;
}
