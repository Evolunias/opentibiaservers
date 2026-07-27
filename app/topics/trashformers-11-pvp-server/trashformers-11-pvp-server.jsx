import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-pvp-server');
}

export default function Trashformers11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-pvp-server" />;
}
