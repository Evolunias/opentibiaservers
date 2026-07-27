import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-germany');
}

export default function BlazeraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-germany" />;
}
