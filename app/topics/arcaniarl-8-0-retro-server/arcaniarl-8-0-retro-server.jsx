import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-retro-server');
}

export default function Arcaniarl80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-retro-server" />;
}
