import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-argentina');
}

export default function RealeraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-argentina" />;
}
