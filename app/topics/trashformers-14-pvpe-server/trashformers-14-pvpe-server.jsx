import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-14-pvpe-server');
}

export default function Trashformers14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-14-pvpe-server" />;
}
