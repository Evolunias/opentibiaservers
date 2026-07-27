import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-poland');
}

export default function ElderaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-poland" />;
}
