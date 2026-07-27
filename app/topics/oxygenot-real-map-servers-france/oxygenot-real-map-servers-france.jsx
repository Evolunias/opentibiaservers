import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-servers-france');
}

export default function OxygenotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-servers-france" />;
}
