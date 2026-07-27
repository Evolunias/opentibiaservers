import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-72-pvp-server');
}

export default function Trashformers772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-72-pvp-server" />;
}
