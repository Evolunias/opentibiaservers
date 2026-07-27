import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-pvpe-server');
}

export default function Originaltibia100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-pvpe-server" />;
}
