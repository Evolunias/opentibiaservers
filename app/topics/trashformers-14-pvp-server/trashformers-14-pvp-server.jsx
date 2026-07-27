import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-pvp-server');
}

export default function Trashformers14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-pvp-server" />;
}
