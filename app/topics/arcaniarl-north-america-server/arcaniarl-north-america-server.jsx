import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-north-america-server');
}

export default function ArcaniarlNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-north-america-server" />;
}
