import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-canada');
}

export default function AlasteraWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-canada" />;
}
