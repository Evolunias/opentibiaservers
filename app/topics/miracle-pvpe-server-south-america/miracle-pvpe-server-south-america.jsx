import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-south-america');
}

export default function MiraclePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-south-america" />;
}
