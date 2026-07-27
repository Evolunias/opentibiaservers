import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-pvpe-server');
}

export default function Sabrehaven12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-pvpe-server" />;
}
