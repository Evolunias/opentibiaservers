import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-pvpe-server');
}

export default function Originaltibia11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-pvpe-server" />;
}
