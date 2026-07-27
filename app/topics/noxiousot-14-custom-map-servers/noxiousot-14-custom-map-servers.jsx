import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-custom-map-servers');
}

export default function Noxiousot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-custom-map-servers" />;
}
