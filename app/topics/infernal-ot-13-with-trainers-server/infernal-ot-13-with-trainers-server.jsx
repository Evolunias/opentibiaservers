import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-with-trainers-server');
}

export default function InfernalOt13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-with-trainers-server" />;
}
