import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-uk');
}

export default function MediviaWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-uk" />;
}
