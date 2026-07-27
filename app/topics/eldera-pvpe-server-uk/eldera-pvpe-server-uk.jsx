import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-uk');
}

export default function ElderaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-uk" />;
}
