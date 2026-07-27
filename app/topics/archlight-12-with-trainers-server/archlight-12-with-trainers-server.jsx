import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-with-trainers-server');
}

export default function Archlight12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-with-trainers-server" />;
}
