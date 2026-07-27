import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-with-trainers-server');
}

export default function DuraOnline12WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-with-trainers-server" />;
}
