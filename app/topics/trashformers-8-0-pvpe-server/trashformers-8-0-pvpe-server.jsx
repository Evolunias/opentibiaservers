import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-0-pvpe-server');
}

export default function Trashformers80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-0-pvpe-server" />;
}
