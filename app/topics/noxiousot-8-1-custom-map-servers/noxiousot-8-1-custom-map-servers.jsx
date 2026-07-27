import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-custom-map-servers');
}

export default function Noxiousot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-custom-map-servers" />;
}
