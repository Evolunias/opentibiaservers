import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem');
}

export default function RealMapMidhemKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem" />;
}
