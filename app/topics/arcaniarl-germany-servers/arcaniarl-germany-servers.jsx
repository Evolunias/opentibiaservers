import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-germany-servers');
}

export default function ArcaniarlGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-germany-servers" />;
}
