import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-custom-map-servers');
}

export default function Noxiousot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-custom-map-servers" />;
}
