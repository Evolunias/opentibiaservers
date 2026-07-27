import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-argentina');
}

export default function TibiantisWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-argentina" />;
}
