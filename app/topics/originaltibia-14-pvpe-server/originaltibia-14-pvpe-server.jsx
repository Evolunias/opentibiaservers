import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-pvpe-server');
}

export default function Originaltibia14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-pvpe-server" />;
}
