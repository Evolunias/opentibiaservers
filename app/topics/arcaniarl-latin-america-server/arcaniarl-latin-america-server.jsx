import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-latin-america-server');
}

export default function ArcaniarlLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-latin-america-server" />;
}
