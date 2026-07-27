import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-argentina-servers');
}

export default function ArcaniarlArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-argentina-servers" />;
}
