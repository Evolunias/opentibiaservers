import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-pvpe-server');
}

export default function Sabrehaven80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-pvpe-server" />;
}
