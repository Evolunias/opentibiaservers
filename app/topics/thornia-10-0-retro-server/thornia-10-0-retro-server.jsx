import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-retro-server');
}

export default function Thornia100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-retro-server" />;
}
