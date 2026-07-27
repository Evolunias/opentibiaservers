import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-mexico');
}

export default function NoxiousotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-mexico" />;
}
