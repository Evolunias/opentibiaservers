import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-argentina-server');
}

export default function ArcaniarlArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-argentina-server" />;
}
