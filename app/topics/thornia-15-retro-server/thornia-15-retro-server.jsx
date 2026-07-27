import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-retro-server');
}

export default function Thornia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-retro-server" />;
}
