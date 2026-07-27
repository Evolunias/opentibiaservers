import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-servers-france');
}

export default function RealeraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-servers-france" />;
}
