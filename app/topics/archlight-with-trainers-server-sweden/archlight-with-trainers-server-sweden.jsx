import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-sweden');
}

export default function ArchlightWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-sweden" />;
}
