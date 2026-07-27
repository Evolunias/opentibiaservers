import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-with-trainers-server');
}

export default function InfernalOt74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-with-trainers-server" />;
}
