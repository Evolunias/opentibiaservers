import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-exp-rate');
}

export default function TrashformersExpRateKeywordPage() {
  return <StaticKeywordPage slug="trashformers-exp-rate" />;
}
