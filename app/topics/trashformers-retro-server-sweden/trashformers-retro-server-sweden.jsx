import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-sweden');
}

export default function TrashformersRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-sweden" />;
}
