import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-login');
}

export default function OfficialTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-login" />;
}
