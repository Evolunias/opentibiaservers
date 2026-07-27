import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-open-tibia');
}

export default function RealMapMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-open-tibia" />;
}
