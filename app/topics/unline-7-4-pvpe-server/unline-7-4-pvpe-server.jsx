import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-pvpe-server');
}

export default function Unline74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-pvpe-server" />;
}
