import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-server');
}

export default function PopularTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-server" />;
}
