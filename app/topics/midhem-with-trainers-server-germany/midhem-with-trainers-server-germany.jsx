import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-germany');
}

export default function MidhemWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-germany" />;
}
