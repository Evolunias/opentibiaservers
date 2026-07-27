import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-sweden-servers');
}

export default function ThorniaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-sweden-servers" />;
}
