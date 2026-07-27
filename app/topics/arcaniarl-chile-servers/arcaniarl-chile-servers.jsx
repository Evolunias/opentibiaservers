import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-chile-servers');
}

export default function ArcaniarlChileServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-chile-servers" />;
}
