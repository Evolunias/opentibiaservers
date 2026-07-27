import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-germany');
}

export default function OxygenotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-germany" />;
}
