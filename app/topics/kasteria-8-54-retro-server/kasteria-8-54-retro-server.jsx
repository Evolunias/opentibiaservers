import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-retro-server');
}

export default function Kasteria854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-retro-server" />;
}
