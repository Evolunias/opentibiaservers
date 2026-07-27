import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-with-trainers-server');
}

export default function InfernalOt12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-with-trainers-server" />;
}
