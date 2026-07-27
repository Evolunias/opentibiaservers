import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-germany');
}

export default function UnlineRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-germany" />;
}
