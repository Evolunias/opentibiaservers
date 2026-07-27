import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-poland');
}

export default function MiraclePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-poland" />;
}
