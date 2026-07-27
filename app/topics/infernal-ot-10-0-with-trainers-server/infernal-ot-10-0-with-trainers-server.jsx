import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-with-trainers-server');
}

export default function InfernalOt100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-with-trainers-server" />;
}
