import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-pvp-server');
}

export default function Trashformers71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-pvp-server" />;
}
