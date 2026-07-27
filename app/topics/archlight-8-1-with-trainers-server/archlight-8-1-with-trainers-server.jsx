import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-with-trainers-server');
}

export default function Archlight81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-with-trainers-server" />;
}
