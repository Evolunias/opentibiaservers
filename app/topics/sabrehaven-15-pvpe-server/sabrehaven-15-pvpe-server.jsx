import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-pvpe-server');
}

export default function Sabrehaven15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-pvpe-server" />;
}
