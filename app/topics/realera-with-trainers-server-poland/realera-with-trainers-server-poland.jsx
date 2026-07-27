import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-poland');
}

export default function RealeraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-poland" />;
}
