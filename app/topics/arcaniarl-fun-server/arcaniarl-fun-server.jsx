import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-fun-server');
}

export default function ArcaniarlFunServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-fun-server" />;
}
