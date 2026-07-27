import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-retro-server');
}

export default function Thornia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-retro-server" />;
}
