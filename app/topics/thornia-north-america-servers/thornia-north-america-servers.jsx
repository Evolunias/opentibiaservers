import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-north-america-servers');
}

export default function ThorniaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-north-america-servers" />;
}
