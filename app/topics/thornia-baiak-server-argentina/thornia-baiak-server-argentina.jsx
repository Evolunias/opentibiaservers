import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-argentina');
}

export default function ThorniaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-argentina" />;
}
