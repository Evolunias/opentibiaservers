import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-germany');
}

export default function CustomMapClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-germany" />;
}
