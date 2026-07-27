import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-login');
}

export default function PopularTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-login" />;
}
