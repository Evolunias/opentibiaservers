import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-non-pvp-server');
}

export default function Trashformers11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-non-pvp-server" />;
}
