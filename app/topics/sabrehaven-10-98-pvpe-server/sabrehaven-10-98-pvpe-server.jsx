import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-pvpe-server');
}

export default function Sabrehaven1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-pvpe-server" />;
}
