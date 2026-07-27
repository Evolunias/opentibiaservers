import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-retro-server');
}

export default function Trashformers14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-retro-server" />;
}
