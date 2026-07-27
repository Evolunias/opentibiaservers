import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-retro-server');
}

export default function Canob71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-retro-server" />;
}
