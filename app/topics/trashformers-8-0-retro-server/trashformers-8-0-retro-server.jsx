import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-retro-server');
}

export default function Trashformers80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-retro-server" />;
}
