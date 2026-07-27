import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-pvpe-server');
}

export default function Sabrehaven11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-pvpe-server" />;
}
