import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-website');
}

export default function RealMapClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-website" />;
}
