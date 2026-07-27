import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-usa');
}

export default function OlderaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-usa" />;
}
