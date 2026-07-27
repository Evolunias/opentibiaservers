import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-canada');
}

export default function TibianusWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-canada" />;
}
