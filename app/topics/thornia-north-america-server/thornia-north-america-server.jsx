import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-north-america-server');
}

export default function ThorniaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-north-america-server" />;
}
