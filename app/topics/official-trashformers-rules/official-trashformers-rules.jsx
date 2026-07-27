import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-rules');
}

export default function OfficialTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-rules" />;
}
