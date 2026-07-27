import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-europe-server');
}

export default function ArcaniarlEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-europe-server" />;
}
