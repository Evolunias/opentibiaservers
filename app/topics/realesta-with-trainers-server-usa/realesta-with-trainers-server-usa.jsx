import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-usa');
}

export default function RealestaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-usa" />;
}
