import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-9-6-pvpe-server');
}

export default function Trashformers96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-9-6-pvpe-server" />;
}
