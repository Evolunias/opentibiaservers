import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-with-trainers-server');
}

export default function InfernalOt76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-with-trainers-server" />;
}
