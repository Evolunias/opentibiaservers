import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-europe');
}

export default function ThorniaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-europe" />;
}
