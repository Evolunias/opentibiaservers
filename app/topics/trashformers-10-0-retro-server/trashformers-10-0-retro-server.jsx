import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-retro-server');
}

export default function Trashformers100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-retro-server" />;
}
