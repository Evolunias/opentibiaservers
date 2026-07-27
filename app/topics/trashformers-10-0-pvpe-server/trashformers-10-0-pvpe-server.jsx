import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-pvpe-server');
}

export default function Trashformers100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-pvpe-server" />;
}
