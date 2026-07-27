import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-noxiousot-servers');
}

export default function CustomMapNoxiousotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-noxiousot-servers" />;
}
