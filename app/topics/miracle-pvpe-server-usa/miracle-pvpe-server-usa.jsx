import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-usa');
}

export default function MiraclePvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-usa" />;
}
