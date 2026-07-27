import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-canada');
}

export default function ArchlightWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-canada" />;
}
