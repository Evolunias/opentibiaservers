import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-with-trainers-server');
}

export default function Coxaot76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-with-trainers-server" />;
}
