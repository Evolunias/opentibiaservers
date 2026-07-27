import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-trashformers-server');
}

export default function RetroTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="retro-trashformers-server" />;
}
