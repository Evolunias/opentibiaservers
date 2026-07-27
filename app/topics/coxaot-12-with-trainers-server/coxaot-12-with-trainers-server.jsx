import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-with-trainers-server');
}

export default function Coxaot12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-with-trainers-server" />;
}
