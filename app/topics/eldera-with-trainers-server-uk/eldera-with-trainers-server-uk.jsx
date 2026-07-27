import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-uk');
}

export default function ElderaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-uk" />;
}
