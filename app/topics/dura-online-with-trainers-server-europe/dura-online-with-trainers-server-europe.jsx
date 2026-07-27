import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-europe');
}

export default function DuraOnlineWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-europe" />;
}
