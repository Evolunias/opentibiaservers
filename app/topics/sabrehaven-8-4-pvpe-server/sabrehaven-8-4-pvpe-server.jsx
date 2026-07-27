import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-pvpe-server');
}

export default function Sabrehaven84PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-pvpe-server" />;
}
