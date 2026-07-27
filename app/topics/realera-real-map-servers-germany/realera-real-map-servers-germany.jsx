import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-germany');
}

export default function RealeraRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-germany" />;
}
