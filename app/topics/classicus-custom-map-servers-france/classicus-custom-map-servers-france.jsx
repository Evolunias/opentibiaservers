import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-france');
}

export default function ClassicusCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-france" />;
}
