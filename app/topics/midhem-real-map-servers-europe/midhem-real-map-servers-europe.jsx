import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-europe');
}

export default function MidhemRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-europe" />;
}
