import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-pvp-server');
}

export default function Trashformers84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-pvp-server" />;
}
