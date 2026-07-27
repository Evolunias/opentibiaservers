import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-high-exp-server-france');
}

export default function ClassickDrakoriaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-high-exp-server-france" />;
}
