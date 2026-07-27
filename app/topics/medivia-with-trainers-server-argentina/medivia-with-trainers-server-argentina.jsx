import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-argentina');
}

export default function MediviaWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-argentina" />;
}
