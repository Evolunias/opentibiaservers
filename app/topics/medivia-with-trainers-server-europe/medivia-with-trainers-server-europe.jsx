import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-europe');
}

export default function MediviaWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-europe" />;
}
