import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-wars');
}

export default function ArcaniarlWarsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-wars" />;
}
