import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-latin-america-servers');
}

export default function ArcaniarlLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-latin-america-servers" />;
}
