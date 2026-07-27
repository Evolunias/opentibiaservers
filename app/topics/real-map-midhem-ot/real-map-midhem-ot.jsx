import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-ot');
}

export default function RealMapMidhemOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-ot" />;
}
