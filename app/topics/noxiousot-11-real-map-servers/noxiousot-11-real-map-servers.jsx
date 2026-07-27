import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-real-map-servers');
}

export default function Noxiousot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-real-map-servers" />;
}
