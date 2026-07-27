import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-retro-server');
}

export default function Thornia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-retro-server" />;
}
