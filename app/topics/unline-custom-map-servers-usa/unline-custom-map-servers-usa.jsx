import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-usa');
}

export default function UnlineCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-usa" />;
}
