import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-trainers-server-usa');
}

export default function AlasteraWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-trainers-server-usa" />;
}
