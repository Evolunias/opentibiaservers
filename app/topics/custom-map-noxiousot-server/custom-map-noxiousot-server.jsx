import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-noxiousot-server');
}

export default function CustomMapNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-noxiousot-server" />;
}
