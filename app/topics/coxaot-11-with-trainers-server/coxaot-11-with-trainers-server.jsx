import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-with-trainers-server');
}

export default function Coxaot11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-with-trainers-server" />;
}
