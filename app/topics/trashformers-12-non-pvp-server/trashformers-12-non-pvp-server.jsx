import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-non-pvp-server');
}

export default function Trashformers12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-non-pvp-server" />;
}
