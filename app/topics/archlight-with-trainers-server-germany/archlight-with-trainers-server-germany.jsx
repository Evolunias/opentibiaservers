import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-germany');
}

export default function ArchlightWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-germany" />;
}
