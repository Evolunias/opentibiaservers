import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-wars');
}

export default function TrashformersWarsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-wars" />;
}
