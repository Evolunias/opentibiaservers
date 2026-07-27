import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-7-4-pvpe-server');
}

export default function Miracle74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-7-4-pvpe-server" />;
}
