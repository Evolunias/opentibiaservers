import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-retro-server');
}

export default function Trashformers11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-retro-server" />;
}
