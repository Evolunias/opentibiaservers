import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-france');
}

export default function OriginaltibiaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-france" />;
}
