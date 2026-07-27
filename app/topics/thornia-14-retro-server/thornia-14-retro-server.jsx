import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-retro-server');
}

export default function Thornia14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-retro-server" />;
}
