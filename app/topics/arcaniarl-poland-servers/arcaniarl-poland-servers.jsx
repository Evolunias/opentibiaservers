import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-poland-servers');
}

export default function ArcaniarlPolandServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-poland-servers" />;
}
