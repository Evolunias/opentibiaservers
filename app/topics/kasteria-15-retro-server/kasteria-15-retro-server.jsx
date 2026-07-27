import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-retro-server');
}

export default function Kasteria15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-retro-server" />;
}
