import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-germany');
}

export default function ClassicusCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-germany" />;
}
