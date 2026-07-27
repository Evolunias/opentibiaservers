import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-pvpe-server');
}

export default function Originaltibia1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-pvpe-server" />;
}
