import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-retro-server');
}

export default function Midhem71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-retro-server" />;
}
