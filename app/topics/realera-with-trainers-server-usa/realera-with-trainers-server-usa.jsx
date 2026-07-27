import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-usa');
}

export default function RealeraWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-usa" />;
}
