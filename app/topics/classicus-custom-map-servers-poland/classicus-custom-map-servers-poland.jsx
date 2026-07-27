import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-poland');
}

export default function ClassicusCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-poland" />;
}
