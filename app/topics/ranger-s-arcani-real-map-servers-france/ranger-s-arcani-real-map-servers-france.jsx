import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-france');
}

export default function RangerSArcaniRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-france" />;
}
