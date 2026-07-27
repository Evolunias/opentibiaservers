import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-real-map-servers');
}

export default function Empirebr14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-real-map-servers" />;
}
