import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-harmonia-ot-server');
}

export default function PvpHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-harmonia-ot-server" />;
}
