import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-infernal-ot-server');
}

export default function CustomMapInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-infernal-ot-server" />;
}
