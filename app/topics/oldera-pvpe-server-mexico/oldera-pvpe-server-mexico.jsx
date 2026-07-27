import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-mexico');
}

export default function OlderaPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-mexico" />;
}
