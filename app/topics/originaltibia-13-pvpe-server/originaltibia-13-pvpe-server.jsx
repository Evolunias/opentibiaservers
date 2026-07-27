import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-pvpe-server');
}

export default function Originaltibia13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-pvpe-server" />;
}
