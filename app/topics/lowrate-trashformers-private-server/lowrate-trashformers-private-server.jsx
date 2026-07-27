import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-private-server');
}

export default function LowrateTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-private-server" />;
}
