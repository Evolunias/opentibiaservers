import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-retro-server');
}

export default function Thornia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-retro-server" />;
}
