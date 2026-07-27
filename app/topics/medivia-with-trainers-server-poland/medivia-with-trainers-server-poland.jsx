import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-poland');
}

export default function MediviaWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-poland" />;
}
