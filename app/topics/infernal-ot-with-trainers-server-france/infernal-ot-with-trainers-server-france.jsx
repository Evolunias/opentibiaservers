import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-france');
}

export default function InfernalOtWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-france" />;
}
