import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-website');
}

export default function RealMapSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-website" />;
}
