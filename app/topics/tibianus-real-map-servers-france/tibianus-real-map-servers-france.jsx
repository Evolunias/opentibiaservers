import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-france');
}

export default function TibianusRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-france" />;
}
