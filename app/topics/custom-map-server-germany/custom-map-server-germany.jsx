import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-germany');
}

export default function CustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-germany" />;
}
