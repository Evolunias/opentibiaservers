import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-with-trainers-server');
}

export default function DuraOnline15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-with-trainers-server" />;
}
