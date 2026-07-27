import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-pvpe-server');
}

export default function DuraOnline74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-pvpe-server" />;
}
