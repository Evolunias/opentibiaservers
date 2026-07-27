import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-germany');
}

export default function MediviaWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-germany" />;
}
