import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-servers-argentina');
}

export default function OxygenotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-servers-argentina" />;
}
