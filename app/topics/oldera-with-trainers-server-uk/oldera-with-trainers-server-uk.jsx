import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-uk');
}

export default function OlderaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-uk" />;
}
