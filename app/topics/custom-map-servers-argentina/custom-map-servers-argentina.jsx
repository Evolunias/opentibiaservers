import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-argentina');
}

export default function CustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-argentina" />;
}
