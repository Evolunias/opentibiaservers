import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-real-map-servers-europe');
}

export default function SabrehavenRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-real-map-servers-europe" />;
}
