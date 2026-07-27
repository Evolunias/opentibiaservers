import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-1-pvpe-server');
}

export default function Trashformers81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-1-pvpe-server" />;
}
