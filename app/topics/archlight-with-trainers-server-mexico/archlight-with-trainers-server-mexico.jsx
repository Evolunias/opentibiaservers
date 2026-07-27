import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-mexico');
}

export default function ArchlightWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-mexico" />;
}
