import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-retro-server');
}

export default function Thornia84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-retro-server" />;
}
