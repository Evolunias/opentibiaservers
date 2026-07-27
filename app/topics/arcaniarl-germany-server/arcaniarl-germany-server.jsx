import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-germany-server');
}

export default function ArcaniarlGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-germany-server" />;
}
