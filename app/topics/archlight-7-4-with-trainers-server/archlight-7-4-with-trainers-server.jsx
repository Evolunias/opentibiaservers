import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-with-trainers-server');
}

export default function Archlight74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-with-trainers-server" />;
}
