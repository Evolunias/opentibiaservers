import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-argentina');
}

export default function UnlineCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-argentina" />;
}
