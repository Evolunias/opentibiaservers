import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-create-account');
}

export default function OfficialTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-create-account" />;
}
