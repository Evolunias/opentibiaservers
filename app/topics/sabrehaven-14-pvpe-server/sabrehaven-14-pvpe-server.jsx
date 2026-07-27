import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-pvpe-server');
}

export default function Sabrehaven14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-pvpe-server" />;
}
