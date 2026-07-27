import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-uk');
}

export default function OxygenotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-uk" />;
}
