import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-germany');
}

export default function DuraOnlineWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-germany" />;
}
