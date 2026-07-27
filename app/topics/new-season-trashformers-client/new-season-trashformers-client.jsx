import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-client');
}

export default function NewSeasonTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-client" />;
}
