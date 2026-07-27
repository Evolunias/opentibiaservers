import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvpe-server-poland');
}

export default function OlderaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvpe-server-poland" />;
}
