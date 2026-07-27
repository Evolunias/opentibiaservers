import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-retro-server');
}

export default function Arcaniarl76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-retro-server" />;
}
