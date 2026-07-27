import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-custom-map-servers');
}

export default function Noxiousot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-custom-map-servers" />;
}
