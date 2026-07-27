import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-retro-server');
}

export default function Trashformers71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-retro-server" />;
}
