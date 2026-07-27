import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-trainers-server-europe');
}

export default function ArchlightWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-trainers-server-europe" />;
}
