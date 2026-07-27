import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-poland');
}

export default function MidhemRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-poland" />;
}
