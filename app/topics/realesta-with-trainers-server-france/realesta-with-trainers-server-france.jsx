import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-france');
}

export default function RealestaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-france" />;
}
