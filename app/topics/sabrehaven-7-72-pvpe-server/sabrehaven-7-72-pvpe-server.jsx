import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-pvpe-server');
}

export default function Sabrehaven772PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-pvpe-server" />;
}
