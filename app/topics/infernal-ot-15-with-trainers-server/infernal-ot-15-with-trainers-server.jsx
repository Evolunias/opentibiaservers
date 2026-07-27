import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-with-trainers-server');
}

export default function InfernalOt15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-with-trainers-server" />;
}
