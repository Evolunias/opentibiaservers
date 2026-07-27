import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-poland');
}

export default function DuraOnlineWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-poland" />;
}
