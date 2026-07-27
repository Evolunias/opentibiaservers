import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-server-poland');
}

export default function ClassicusCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-server-poland" />;
}
