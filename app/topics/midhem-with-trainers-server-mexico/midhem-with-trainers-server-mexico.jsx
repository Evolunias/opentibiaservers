import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-mexico');
}

export default function MidhemWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-mexico" />;
}
