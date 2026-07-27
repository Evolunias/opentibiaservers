import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-retro-server');
}

export default function Thornia772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-retro-server" />;
}
