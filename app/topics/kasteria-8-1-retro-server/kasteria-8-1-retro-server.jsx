import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-retro-server');
}

export default function Kasteria81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-retro-server" />;
}
