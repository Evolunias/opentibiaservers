import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-72-pvpe-server');
}

export default function Originaltibia772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-72-pvpe-server" />;
}
