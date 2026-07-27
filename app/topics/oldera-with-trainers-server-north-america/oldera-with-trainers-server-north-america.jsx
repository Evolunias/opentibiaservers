import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-north-america');
}

export default function OlderaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-north-america" />;
}
