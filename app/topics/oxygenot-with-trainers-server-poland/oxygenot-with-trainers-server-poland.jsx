import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-poland');
}

export default function OxygenotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-poland" />;
}
