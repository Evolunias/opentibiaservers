import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-trainers-server-brazil');
}

export default function RealestaWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-trainers-server-brazil" />;
}
