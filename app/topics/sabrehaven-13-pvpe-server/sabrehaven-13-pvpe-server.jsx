import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-pvpe-server');
}

export default function Sabrehaven13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-pvpe-server" />;
}
