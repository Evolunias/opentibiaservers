import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-retro-server');
}

export default function Arcaniarl12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-retro-server" />;
}
