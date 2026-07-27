import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-retro-server');
}

export default function Trashformers81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-retro-server" />;
}
