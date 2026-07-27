import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-custom-map-servers');
}

export default function Noxiousot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-custom-map-servers" />;
}
