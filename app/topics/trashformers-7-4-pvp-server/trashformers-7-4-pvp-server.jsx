import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-4-pvp-server');
}

export default function Trashformers74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-4-pvp-server" />;
}
