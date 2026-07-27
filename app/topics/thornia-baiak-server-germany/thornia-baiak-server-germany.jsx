import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-germany');
}

export default function ThorniaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-germany" />;
}
