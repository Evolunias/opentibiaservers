import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-ots');
}

export default function OfficialTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-ots" />;
}
