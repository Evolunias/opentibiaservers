import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-trashformers-server');
}

export default function PvpeTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-trashformers-server" />;
}
