import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-germany');
}

export default function ClassicusCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-germany" />;
}
