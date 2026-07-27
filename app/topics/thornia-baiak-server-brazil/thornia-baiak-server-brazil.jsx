import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-brazil');
}

export default function ThorniaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-brazil" />;
}
