import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-private-server');
}

export default function OfficialTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-private-server" />;
}
