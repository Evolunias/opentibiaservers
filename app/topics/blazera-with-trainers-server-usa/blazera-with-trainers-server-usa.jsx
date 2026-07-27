import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-usa');
}

export default function BlazeraWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-usa" />;
}
