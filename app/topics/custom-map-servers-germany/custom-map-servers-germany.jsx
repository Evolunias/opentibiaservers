import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-germany');
}

export default function CustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-germany" />;
}
