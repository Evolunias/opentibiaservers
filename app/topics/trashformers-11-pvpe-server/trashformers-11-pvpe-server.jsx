import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-pvpe-server');
}

export default function Trashformers11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-pvpe-server" />;
}
