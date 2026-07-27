import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-with-trainers-server');
}

export default function Coxaot84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-with-trainers-server" />;
}
