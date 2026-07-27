import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-latin-america-servers');
}

export default function ThorniaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-latin-america-servers" />;
}
