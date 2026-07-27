import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-ots');
}

export default function RealMapMidhemOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-ots" />;
}
