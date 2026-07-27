import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-latin-america-server');
}

export default function ThorniaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-latin-america-server" />;
}
