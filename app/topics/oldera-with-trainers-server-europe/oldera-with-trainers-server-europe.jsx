import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-europe');
}

export default function OlderaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-europe" />;
}
