import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-with-trainers-server');
}

export default function Coxaot14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-with-trainers-server" />;
}
