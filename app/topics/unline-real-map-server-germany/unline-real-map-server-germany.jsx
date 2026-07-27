import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-germany');
}

export default function UnlineRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-germany" />;
}
