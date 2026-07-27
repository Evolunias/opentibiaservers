import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-custom-map-servers');
}

export default function Noxiousot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-custom-map-servers" />;
}
