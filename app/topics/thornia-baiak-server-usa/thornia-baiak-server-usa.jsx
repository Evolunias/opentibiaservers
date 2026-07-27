import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-usa');
}

export default function ThorniaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-usa" />;
}
