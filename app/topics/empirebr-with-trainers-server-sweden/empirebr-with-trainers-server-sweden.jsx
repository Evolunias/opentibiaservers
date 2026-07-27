import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-trainers-server-sweden');
}

export default function EmpirebrWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-trainers-server-sweden" />;
}
