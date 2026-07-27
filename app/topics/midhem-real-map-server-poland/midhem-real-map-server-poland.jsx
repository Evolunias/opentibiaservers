import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-poland');
}

export default function MidhemRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-poland" />;
}
