import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-poland');
}

export default function ThorniaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-poland" />;
}
