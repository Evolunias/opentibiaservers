import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-europe');
}

export default function MidhemRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-europe" />;
}
