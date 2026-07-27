import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-custom-map-server-usa');
}

export default function TibianusCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-custom-map-server-usa" />;
}
