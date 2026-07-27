import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-with-trainers-server');
}

export default function InfernalOt86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-with-trainers-server" />;
}
