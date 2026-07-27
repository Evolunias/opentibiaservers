import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-usa');
}

export default function OxygenotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-usa" />;
}
