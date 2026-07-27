import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-custom-map-server-france');
}

export default function OxygenotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-custom-map-server-france" />;
}
