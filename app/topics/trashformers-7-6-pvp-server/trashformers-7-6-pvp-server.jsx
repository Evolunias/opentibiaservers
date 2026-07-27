import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-6-pvp-server');
}

export default function Trashformers76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-6-pvp-server" />;
}
