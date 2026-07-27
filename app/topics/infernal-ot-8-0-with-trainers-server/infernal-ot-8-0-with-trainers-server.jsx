import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-with-trainers-server');
}

export default function InfernalOt80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-with-trainers-server" />;
}
