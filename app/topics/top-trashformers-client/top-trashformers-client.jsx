import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-client');
}

export default function TopTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-client" />;
}
