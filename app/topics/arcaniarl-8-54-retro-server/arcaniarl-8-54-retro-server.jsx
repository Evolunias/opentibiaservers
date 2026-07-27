import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-54-retro-server');
}

export default function Arcaniarl854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-54-retro-server" />;
}
