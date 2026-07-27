import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-europe');
}

export default function MidhemWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-europe" />;
}
