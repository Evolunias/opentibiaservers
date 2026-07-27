import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-custom-map-servers');
}

export default function Noxiousot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-custom-map-servers" />;
}
