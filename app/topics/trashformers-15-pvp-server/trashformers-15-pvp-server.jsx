import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-pvp-server');
}

export default function Trashformers15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-pvp-server" />;
}
