import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-with-trainers-server');
}

export default function Archlight11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-with-trainers-server" />;
}
