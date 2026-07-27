import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-4-pvpe-server');
}

export default function Trashformers84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-4-pvpe-server" />;
}
