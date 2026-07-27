import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-europe');
}

export default function UnlineRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-europe" />;
}
