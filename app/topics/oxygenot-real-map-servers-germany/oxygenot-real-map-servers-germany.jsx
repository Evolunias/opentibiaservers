import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-germany');
}

export default function OxygenotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-germany" />;
}
