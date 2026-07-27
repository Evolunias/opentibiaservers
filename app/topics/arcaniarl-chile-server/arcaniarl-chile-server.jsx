import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-chile-server');
}

export default function ArcaniarlChileServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-chile-server" />;
}
