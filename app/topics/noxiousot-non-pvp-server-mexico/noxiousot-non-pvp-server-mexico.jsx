import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-mexico');
}

export default function NoxiousotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-mexico" />;
}
