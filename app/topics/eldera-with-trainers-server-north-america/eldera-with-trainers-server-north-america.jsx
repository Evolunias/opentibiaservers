import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-north-america');
}

export default function ElderaWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-north-america" />;
}
