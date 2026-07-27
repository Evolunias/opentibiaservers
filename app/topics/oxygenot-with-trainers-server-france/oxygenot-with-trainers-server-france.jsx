import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-france');
}

export default function OxygenotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-france" />;
}
