import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-server-poland');
}

export default function ClassickDrakoriaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-server-poland" />;
}
