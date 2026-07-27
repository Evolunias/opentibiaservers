import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-usa');
}

export default function DuraOnlineWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-usa" />;
}
