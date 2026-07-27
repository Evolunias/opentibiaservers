import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-europe-servers');
}

export default function ArcaniarlEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-europe-servers" />;
}
