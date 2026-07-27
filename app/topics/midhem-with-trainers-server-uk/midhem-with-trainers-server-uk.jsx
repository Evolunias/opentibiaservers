import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-uk');
}

export default function MidhemWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-uk" />;
}
