import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-pvpe-server-brazil');
}

export default function SabrehavenPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-pvpe-server-brazil" />;
}
