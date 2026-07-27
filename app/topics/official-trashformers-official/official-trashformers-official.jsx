import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-official');
}

export default function OfficialTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-official" />;
}
