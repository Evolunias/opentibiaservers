import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-trainers-server-brazil');
}

export default function OxygenotWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-trainers-server-brazil" />;
}
