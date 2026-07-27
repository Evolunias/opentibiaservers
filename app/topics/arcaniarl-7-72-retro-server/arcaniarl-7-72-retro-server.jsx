import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-72-retro-server');
}

export default function Arcaniarl772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-72-retro-server" />;
}
