import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-pvpe-server');
}

export default function Originaltibia81PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-pvpe-server" />;
}
