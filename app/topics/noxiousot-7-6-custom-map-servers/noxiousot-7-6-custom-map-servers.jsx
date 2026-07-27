import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-custom-map-servers');
}

export default function Noxiousot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-custom-map-servers" />;
}
