import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-usa-server');
}

export default function ArcaniarlUsaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-usa-server" />;
}
