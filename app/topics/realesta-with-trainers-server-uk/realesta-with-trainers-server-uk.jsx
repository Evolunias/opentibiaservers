import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-uk');
}

export default function RealestaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-uk" />;
}
