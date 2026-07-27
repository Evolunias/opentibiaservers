import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-brazil');
}

export default function OlderaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-brazil" />;
}
