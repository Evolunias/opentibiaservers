import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-pvpe-server');
}

export default function Originaltibia84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-pvpe-server" />;
}
