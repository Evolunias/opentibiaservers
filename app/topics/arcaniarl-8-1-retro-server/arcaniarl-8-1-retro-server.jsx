import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-retro-server');
}

export default function Arcaniarl81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-retro-server" />;
}
