import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-retro-server');
}

export default function Arcaniarl14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-retro-server" />;
}
