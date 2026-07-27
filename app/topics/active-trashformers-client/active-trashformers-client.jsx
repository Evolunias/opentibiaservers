import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-client');
}

export default function ActiveTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-client" />;
}
