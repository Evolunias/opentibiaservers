import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-brazil');
}

export default function MiraclePvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-brazil" />;
}
