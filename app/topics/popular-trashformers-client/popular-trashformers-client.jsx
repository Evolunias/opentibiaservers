import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-client');
}

export default function PopularTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-client" />;
}
