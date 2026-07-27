import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline');
}

export default function RealMapUnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline" />;
}
