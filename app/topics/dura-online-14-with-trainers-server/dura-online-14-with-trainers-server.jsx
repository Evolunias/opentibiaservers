import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-with-trainers-server');
}

export default function DuraOnline14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-with-trainers-server" />;
}
