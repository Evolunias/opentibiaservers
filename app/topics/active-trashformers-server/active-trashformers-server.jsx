import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-server');
}

export default function ActiveTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-server" />;
}
