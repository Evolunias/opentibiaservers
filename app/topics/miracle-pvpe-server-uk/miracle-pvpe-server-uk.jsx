import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-uk');
}

export default function MiraclePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-uk" />;
}
