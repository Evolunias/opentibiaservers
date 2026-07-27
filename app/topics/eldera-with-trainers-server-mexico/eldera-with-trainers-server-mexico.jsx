import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-mexico');
}

export default function ElderaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-mexico" />;
}
