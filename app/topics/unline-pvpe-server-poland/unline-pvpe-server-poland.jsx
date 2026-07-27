import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-poland');
}

export default function UnlinePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-poland" />;
}
