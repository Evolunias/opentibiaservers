import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-usa');
}

export default function ElderaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-usa" />;
}
