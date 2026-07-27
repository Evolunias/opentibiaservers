import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-retro-server');
}

export default function Arcaniarl96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-retro-server" />;
}
