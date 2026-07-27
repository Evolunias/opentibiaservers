import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-germany');
}

export default function RealeraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-germany" />;
}
