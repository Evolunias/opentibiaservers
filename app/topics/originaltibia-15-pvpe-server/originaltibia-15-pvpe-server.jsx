import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-pvpe-server');
}

export default function Originaltibia15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-pvpe-server" />;
}
