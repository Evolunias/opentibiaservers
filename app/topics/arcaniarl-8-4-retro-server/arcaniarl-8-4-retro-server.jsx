import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-retro-server');
}

export default function Arcaniarl84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-retro-server" />;
}
