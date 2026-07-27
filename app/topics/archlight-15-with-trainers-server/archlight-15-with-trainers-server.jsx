import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-with-trainers-server');
}

export default function Archlight15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-with-trainers-server" />;
}
