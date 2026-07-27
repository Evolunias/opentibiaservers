import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-argentina');
}

export default function RealestaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-argentina" />;
}
