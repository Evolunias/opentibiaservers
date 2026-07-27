import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-pvpe-server');
}

export default function Sabrehaven74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-pvpe-server" />;
}
