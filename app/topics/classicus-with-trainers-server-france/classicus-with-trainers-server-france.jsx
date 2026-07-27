import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-trainers-server-france');
}

export default function ClassicusWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-trainers-server-france" />;
}
