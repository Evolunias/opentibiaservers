import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-trainers-server-argentina');
}

export default function NostaltherWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-trainers-server-argentina" />;
}
