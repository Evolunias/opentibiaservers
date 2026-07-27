import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-4-non-pvp-server');
}

export default function Trashformers74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-4-non-pvp-server" />;
}
