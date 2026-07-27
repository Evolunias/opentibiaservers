import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-uk');
}

export default function DuraOnlineWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-uk" />;
}
