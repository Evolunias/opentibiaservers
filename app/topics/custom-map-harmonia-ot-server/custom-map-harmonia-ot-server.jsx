import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-harmonia-ot-server');
}

export default function CustomMapHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-harmonia-ot-server" />;
}
