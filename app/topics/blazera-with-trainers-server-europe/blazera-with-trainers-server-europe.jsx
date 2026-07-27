import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-europe');
}

export default function BlazeraWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-europe" />;
}
