import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-germany');
}

export default function ElderaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-germany" />;
}
