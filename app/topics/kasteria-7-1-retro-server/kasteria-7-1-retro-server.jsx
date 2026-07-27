import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-retro-server');
}

export default function Kasteria71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-retro-server" />;
}
