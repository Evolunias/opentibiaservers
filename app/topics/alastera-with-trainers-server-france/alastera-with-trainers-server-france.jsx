import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-france');
}

export default function AlasteraWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-france" />;
}
