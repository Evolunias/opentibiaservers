import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-poland');
}

export default function OlderaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-poland" />;
}
