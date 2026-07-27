import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-retro-server');
}

export default function Kasteria11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-retro-server" />;
}
