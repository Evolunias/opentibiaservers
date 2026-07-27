import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-mexico');
}

export default function ThorniaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-mexico" />;
}
