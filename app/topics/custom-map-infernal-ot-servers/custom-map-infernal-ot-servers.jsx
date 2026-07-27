import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-infernal-ot-servers');
}

export default function CustomMapInfernalOtServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-infernal-ot-servers" />;
}
