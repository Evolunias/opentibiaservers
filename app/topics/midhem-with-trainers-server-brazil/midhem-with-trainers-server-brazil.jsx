import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-brazil');
}

export default function MidhemWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-brazil" />;
}
