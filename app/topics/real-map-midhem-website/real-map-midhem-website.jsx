import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-website');
}

export default function RealMapMidhemWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-website" />;
}
