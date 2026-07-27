import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-usa');
}

export default function MidhemWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-usa" />;
}
