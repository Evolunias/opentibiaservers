import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-retro-server');
}

export default function Trashformers12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-retro-server" />;
}
