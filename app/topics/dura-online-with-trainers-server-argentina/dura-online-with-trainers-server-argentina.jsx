import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-argentina');
}

export default function DuraOnlineWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-argentina" />;
}
