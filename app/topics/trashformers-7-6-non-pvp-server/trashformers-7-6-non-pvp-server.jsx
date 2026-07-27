import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-6-non-pvp-server');
}

export default function Trashformers76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-6-non-pvp-server" />;
}
