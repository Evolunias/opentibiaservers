import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-with-trainers-server');
}

export default function InfernalOt96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-with-trainers-server" />;
}
