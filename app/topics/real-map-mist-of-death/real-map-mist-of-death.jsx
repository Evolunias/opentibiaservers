import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death');
}

export default function RealMapMistOfDeathKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death" />;
}
