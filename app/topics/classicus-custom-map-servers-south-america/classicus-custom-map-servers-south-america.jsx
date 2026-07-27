import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-south-america');
}

export default function ClassicusCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-south-america" />;
}
