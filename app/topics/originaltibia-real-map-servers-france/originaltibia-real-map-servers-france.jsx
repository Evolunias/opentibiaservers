import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-france');
}

export default function OriginaltibiaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-france" />;
}
