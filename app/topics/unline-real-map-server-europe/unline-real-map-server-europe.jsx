import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-europe');
}

export default function UnlineRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-europe" />;
}
