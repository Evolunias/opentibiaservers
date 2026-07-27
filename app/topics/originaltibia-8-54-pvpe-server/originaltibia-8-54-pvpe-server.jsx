import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-pvpe-server');
}

export default function Originaltibia854PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-pvpe-server" />;
}
