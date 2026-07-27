import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-retro-server');
}

export default function Arcaniarl86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-retro-server" />;
}
