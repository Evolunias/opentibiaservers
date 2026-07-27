import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-with-trainers-server');
}

export default function Coxaot15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-with-trainers-server" />;
}
