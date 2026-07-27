import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-website');
}

export default function RealMapMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-website" />;
}
