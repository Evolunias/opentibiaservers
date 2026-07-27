import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-with-trainers-server');
}

export default function InfernalOt84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-with-trainers-server" />;
}
