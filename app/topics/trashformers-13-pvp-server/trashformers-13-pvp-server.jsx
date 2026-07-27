import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-pvp-server');
}

export default function Trashformers13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-pvp-server" />;
}
