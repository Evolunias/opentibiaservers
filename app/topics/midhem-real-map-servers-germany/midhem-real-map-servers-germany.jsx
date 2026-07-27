import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-germany');
}

export default function MidhemRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-germany" />;
}
