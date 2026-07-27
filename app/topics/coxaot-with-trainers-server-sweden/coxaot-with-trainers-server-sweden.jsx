import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-with-trainers-server-sweden');
}

export default function CoxaotWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-with-trainers-server-sweden" />;
}
