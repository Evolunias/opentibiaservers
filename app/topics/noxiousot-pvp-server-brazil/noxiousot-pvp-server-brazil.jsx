import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-brazil');
}

export default function NoxiousotPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-brazil" />;
}
