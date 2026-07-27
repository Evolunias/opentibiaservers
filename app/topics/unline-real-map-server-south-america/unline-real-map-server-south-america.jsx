import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-south-america');
}

export default function UnlineRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-south-america" />;
}
