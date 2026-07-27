import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-real-map-servers-france');
}

export default function ClassicusRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-real-map-servers-france" />;
}
