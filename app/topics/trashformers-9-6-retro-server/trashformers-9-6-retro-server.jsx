import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-retro-server');
}

export default function Trashformers96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-retro-server" />;
}
