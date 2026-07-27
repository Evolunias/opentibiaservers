import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-sweden');
}

export default function DuraOnlineWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-sweden" />;
}
