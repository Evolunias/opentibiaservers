import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-with-trainers-server');
}

export default function DuraOnline11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-with-trainers-server" />;
}
