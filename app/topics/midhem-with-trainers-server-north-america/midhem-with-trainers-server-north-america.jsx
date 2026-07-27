import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-north-america');
}

export default function MidhemWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-north-america" />;
}
