import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-website');
}

export default function RealMapLumineraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-website" />;
}
