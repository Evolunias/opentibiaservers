import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-7-4-pvpe-server');
}

export default function Trashformers74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-7-4-pvpe-server" />;
}
