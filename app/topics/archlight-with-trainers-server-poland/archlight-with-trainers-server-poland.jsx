import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-poland');
}

export default function ArchlightWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-poland" />;
}
