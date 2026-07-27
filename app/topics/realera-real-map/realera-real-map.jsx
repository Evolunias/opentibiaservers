import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map');
}

export default function RealeraRealMapKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map" />;
}
