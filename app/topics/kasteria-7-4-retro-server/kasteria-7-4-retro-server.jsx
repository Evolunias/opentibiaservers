import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-retro-server');
}

export default function Kasteria74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-retro-server" />;
}
