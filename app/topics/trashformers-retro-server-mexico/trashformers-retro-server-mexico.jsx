import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-mexico');
}

export default function TrashformersRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-mexico" />;
}
