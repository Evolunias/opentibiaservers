import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-france');
}

export default function ClassicusHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-france" />;
}
