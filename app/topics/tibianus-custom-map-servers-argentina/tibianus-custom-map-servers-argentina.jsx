import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-servers-argentina');
}

export default function TibianusCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-servers-argentina" />;
}
