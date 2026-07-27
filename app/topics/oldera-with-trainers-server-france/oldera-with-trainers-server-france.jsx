import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-trainers-server-france');
}

export default function OlderaWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-trainers-server-france" />;
}
