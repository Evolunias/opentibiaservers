import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-list-germany');
}

export default function CustomMapServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-list-germany" />;
}
