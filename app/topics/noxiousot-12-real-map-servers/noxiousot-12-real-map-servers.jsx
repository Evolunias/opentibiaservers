import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-real-map-servers');
}

export default function Noxiousot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-real-map-servers" />;
}
