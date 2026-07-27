import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-argentina');
}

export default function OlderaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-argentina" />;
}
