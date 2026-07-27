import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-poland');
}

export default function BlazeraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-poland" />;
}
