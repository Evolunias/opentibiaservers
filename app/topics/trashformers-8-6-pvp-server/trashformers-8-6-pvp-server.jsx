import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-6-pvp-server');
}

export default function Trashformers86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-6-pvp-server" />;
}
