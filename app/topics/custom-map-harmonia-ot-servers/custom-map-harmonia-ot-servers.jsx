import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-harmonia-ot-servers');
}

export default function CustomMapHarmoniaOtServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-harmonia-ot-servers" />;
}
