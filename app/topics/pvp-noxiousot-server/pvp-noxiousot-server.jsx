import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-noxiousot-server');
}

export default function PvpNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-noxiousot-server" />;
}
