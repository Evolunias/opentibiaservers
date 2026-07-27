import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-retro-server');
}

export default function Kasteria13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-retro-server" />;
}
