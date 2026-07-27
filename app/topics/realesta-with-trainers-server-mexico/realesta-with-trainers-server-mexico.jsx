import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-mexico');
}

export default function RealestaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-mexico" />;
}
