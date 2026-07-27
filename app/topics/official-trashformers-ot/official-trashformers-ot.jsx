import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-ot');
}

export default function OfficialTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-ot" />;
}
