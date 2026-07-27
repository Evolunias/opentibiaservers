import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-pvp-server');
}

export default function Trashformers81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-pvp-server" />;
}
