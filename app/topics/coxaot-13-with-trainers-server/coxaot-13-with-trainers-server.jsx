import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-with-trainers-server');
}

export default function Coxaot13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-with-trainers-server" />;
}
