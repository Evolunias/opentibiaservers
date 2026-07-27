import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-trashformers-server');
}

export default function BaiakTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-trashformers-server" />;
}
