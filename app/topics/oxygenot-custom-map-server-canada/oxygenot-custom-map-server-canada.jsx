import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-canada');
}

export default function OxygenotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-canada" />;
}
