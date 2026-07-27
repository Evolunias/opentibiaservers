import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-brazil');
}

export default function MediviaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-brazil" />;
}
