import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-non-pvp-server');
}

export default function Trashformers84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-non-pvp-server" />;
}
