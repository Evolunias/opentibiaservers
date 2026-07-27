import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-france');
}

export default function OriginaltibiaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-france" />;
}
