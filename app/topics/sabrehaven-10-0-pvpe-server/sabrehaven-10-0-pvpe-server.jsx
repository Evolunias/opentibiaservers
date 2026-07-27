import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-pvpe-server');
}

export default function Sabrehaven100PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-pvpe-server" />;
}
