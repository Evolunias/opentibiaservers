import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-non-pvp-server');
}

export default function Trashformers96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-non-pvp-server" />;
}
