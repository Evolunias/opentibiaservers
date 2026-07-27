import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-tibia');
}

export default function RealMapMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-tibia" />;
}
