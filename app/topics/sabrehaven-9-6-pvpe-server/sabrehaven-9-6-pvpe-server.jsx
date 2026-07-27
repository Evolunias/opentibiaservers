import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-pvpe-server');
}

export default function Sabrehaven96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-pvpe-server" />;
}
