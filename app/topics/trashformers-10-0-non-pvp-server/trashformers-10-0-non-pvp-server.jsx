import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-non-pvp-server');
}

export default function Trashformers100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-non-pvp-server" />;
}
