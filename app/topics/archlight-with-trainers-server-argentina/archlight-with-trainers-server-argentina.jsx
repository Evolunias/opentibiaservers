import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-argentina');
}

export default function ArchlightWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-argentina" />;
}
