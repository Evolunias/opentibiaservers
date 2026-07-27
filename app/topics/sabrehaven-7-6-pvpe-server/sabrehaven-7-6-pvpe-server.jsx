import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-pvpe-server');
}

export default function Sabrehaven76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-pvpe-server" />;
}
