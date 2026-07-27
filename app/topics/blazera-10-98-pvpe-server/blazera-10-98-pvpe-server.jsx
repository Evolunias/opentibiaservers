import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-pvpe-server');
}

export default function Blazera1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-pvpe-server" />;
}
