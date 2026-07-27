import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-brazil');
}

export default function ElderaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-brazil" />;
}
