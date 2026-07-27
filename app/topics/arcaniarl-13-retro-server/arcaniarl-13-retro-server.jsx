import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-retro-server');
}

export default function Arcaniarl13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-retro-server" />;
}
