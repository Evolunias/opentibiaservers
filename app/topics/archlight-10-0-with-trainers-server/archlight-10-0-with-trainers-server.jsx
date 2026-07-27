import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-0-with-trainers-server');
}

export default function Archlight100WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-0-with-trainers-server" />;
}
