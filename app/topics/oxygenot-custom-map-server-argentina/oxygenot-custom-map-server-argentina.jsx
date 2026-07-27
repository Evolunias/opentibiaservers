import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-argentina');
}

export default function OxygenotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-argentina" />;
}
