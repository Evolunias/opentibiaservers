import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-usa');
}

export default function OxygenotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-usa" />;
}
