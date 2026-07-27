import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-pvpe-server');
}

export default function Originaltibia71PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-pvpe-server" />;
}
