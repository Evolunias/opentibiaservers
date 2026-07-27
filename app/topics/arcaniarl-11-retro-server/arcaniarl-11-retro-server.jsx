import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-retro-server');
}

export default function Arcaniarl11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-retro-server" />;
}
