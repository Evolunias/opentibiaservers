import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-trainers-server-sweden');
}

export default function UnlineWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-with-trainers-server-sweden" />;
}
