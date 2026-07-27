import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-retro-server');
}

export default function Arcaniarl71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-retro-server" />;
}
