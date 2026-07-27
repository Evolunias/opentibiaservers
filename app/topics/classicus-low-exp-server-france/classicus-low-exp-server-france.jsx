import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-france');
}

export default function ClassicusLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-france" />;
}
