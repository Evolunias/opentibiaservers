import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-pvpe-server');
}

export default function Blazera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-pvpe-server" />;
}
