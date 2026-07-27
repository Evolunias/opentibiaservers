import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-poland-server');
}

export default function ArcaniarlPolandServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-poland-server" />;
}
