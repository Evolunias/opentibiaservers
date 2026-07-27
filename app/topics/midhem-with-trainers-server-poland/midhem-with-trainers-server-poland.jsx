import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-poland');
}

export default function MidhemWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-poland" />;
}
