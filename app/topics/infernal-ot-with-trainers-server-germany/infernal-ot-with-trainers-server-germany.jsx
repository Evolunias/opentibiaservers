import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-trainers-server-germany');
}

export default function InfernalOtWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-trainers-server-germany" />;
}
