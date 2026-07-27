import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-retro-server');
}

export default function Trashformers15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-retro-server" />;
}
