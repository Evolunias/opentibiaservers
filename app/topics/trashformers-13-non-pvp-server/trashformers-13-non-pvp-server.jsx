import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-non-pvp-server');
}

export default function Trashformers13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-non-pvp-server" />;
}
