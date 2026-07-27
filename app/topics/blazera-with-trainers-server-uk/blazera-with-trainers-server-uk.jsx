import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-uk');
}

export default function BlazeraWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-uk" />;
}
