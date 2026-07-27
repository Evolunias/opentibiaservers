import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-argentina');
}

export default function ElderaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-argentina" />;
}
