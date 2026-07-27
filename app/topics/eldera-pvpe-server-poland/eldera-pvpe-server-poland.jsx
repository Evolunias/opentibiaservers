import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvpe-server-poland');
}

export default function ElderaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvpe-server-poland" />;
}
