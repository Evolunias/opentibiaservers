import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-with-trainers-server');
}

export default function Coxaot71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-with-trainers-server" />;
}
