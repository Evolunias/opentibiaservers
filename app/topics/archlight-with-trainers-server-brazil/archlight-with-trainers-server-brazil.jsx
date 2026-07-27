import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-brazil');
}

export default function ArchlightWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-brazil" />;
}
