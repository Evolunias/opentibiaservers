import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-europe');
}

export default function ElderaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-europe" />;
}
