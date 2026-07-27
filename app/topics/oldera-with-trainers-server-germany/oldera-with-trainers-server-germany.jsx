import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-germany');
}

export default function OlderaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-germany" />;
}
