import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-poland');
}

export default function RealestaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-poland" />;
}
