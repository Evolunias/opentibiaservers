import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-germany');
}

export default function RealestaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-germany" />;
}
