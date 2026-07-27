import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-website');
}

export default function RealMapEvoleraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-website" />;
}
