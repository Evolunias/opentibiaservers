import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-with-trainers-server');
}

export default function InfernalOt11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-with-trainers-server" />;
}
