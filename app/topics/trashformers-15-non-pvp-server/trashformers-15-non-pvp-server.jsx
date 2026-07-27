import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-non-pvp-server');
}

export default function Trashformers15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-non-pvp-server" />;
}
