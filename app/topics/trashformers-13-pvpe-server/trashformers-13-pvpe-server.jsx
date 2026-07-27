import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-13-pvpe-server');
}

export default function Trashformers13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-13-pvpe-server" />;
}
