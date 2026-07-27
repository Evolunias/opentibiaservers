import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-france');
}

export default function ClassickDrakoriaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-france" />;
}
