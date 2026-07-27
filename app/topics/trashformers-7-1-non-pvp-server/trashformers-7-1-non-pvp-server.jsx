import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-1-non-pvp-server');
}

export default function Trashformers71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-1-non-pvp-server" />;
}
