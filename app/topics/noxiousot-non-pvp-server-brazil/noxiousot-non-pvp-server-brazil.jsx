import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-brazil');
}

export default function NoxiousotNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-brazil" />;
}
