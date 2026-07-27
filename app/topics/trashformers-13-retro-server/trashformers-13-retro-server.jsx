import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-retro-server');
}

export default function Trashformers13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-retro-server" />;
}
