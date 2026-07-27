import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-72-with-trainers-server');
}

export default function Archlight772WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-72-with-trainers-server" />;
}
