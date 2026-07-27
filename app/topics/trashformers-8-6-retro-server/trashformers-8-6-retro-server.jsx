import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-6-retro-server');
}

export default function Trashformers86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-6-retro-server" />;
}
