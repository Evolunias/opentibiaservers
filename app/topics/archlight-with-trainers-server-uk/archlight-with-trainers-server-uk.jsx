import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-uk');
}

export default function ArchlightWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-uk" />;
}
