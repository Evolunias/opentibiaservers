import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-uk');
}

export default function ThorniaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-uk" />;
}
