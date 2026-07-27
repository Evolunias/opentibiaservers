import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-europe');
}

export default function MiraclePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-europe" />;
}
