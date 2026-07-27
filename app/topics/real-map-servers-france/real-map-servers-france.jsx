import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-servers-france');
}

export default function RealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-servers-france" />;
}
