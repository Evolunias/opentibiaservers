import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-trainers-server-brazil');
}

export default function DuraOnlineWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-trainers-server-brazil" />;
}
