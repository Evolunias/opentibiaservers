import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-usa');
}

export default function TibiantisWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-usa" />;
}
