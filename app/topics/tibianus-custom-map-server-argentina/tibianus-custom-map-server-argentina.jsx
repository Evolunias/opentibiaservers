import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-argentina');
}

export default function TibianusCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-argentina" />;
}
