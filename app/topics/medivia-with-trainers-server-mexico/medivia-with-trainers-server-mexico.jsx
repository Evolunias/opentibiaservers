import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-mexico');
}

export default function MediviaWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-mexico" />;
}
