import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-pvpe-server');
}

export default function Trashformers15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-pvpe-server" />;
}
