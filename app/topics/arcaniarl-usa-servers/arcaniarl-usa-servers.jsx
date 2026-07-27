import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-usa-servers');
}

export default function ArcaniarlUsaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-usa-servers" />;
}
