import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-usa');
}

export default function MediviaWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-usa" />;
}
