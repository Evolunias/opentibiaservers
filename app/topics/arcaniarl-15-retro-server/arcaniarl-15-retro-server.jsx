import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-retro-server');
}

export default function Arcaniarl15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-retro-server" />;
}
