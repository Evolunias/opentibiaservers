import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-with-trainers-server');
}

export default function Archlight13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-with-trainers-server" />;
}
