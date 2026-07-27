import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-trainers-server-france');
}

export default function ElderaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-trainers-server-france" />;
}
