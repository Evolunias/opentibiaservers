import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-germany');
}

export default function MidhemRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-germany" />;
}
