import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-harmonia-ot-server');
}

export default function NonPvpHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-harmonia-ot-server" />;
}
