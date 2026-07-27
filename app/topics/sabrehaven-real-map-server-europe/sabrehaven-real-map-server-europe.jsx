import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-server-europe');
}

export default function SabrehavenRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-server-europe" />;
}
