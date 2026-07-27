import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-uk');
}

export default function MidhemRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-uk" />;
}
