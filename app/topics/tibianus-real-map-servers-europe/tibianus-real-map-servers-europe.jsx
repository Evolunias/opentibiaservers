import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-europe');
}

export default function TibianusRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-europe" />;
}
