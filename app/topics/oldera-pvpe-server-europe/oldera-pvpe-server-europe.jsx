import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-europe');
}

export default function OlderaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-europe" />;
}
