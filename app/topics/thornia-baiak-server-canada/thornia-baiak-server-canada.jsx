import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-canada');
}

export default function ThorniaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-canada" />;
}
