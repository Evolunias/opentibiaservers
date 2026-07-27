import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-pvpe-server');
}

export default function Originaltibia96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-pvpe-server" />;
}
