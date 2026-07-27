import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-poland');
}

export default function ClassickDrakoriaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-poland" />;
}
