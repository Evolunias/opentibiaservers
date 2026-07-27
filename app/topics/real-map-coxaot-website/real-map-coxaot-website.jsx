import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-website');
}

export default function RealMapCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-website" />;
}
