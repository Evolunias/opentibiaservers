import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-north-america-servers');
}

export default function ArcaniarlNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-north-america-servers" />;
}
