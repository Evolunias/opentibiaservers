import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-non-pvp-server');
}

export default function Trashformers80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-non-pvp-server" />;
}
