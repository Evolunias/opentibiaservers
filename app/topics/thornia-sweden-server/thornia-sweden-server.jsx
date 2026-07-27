import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-sweden-server');
}

export default function ThorniaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-sweden-server" />;
}
