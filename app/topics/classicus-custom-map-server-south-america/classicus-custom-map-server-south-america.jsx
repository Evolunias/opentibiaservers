import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-south-america');
}

export default function ClassicusCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-south-america" />;
}
