import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-usa');
}

export default function InfernalOtWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-usa" />;
}
