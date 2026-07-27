import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-custom-map-servers');
}

export default function Noxiousot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-custom-map-servers" />;
}
