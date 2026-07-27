import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-with-trainers-server');
}

export default function Coxaot96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-with-trainers-server" />;
}
