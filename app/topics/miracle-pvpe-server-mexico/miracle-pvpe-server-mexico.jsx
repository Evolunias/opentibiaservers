import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-mexico');
}

export default function MiraclePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-mexico" />;
}
