import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-pvpe-server');
}

export default function Blazera772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-pvpe-server" />;
}
