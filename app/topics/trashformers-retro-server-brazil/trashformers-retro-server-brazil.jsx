import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-brazil');
}

export default function TrashformersRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-brazil" />;
}
