import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-europe-servers');
}

export default function TrashformersEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-europe-servers" />;
}
