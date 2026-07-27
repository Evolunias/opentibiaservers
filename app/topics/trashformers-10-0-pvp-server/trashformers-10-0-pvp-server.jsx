import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-pvp-server');
}

export default function Trashformers100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-pvp-server" />;
}
