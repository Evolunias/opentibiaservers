import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-server');
}

export default function OfficialTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-server" />;
}
