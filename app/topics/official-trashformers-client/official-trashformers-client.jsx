import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-client');
}

export default function OfficialTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-client" />;
}
