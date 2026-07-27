import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-north-america');
}

export default function MiraclePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-north-america" />;
}
