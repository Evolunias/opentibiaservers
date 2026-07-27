import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-mexico');
}

export default function OlderaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-mexico" />;
}
