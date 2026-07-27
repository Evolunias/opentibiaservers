import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-retro-server-north-america');
}

export default function TrashformersRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-retro-server-north-america" />;
}
