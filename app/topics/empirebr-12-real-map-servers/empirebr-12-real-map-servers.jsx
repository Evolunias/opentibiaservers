import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-real-map-servers');
}

export default function Empirebr12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-real-map-servers" />;
}
