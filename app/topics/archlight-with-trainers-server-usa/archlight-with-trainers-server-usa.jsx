import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-usa');
}

export default function ArchlightWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-usa" />;
}
