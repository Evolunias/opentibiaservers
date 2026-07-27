import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-brazil');
}

export default function OlderaPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-brazil" />;
}
