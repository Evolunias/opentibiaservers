import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-with-trainers-server');
}

export default function InfernalOt14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-with-trainers-server" />;
}
