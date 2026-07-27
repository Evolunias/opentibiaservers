import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-retro-server');
}

export default function Canob772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-retro-server" />;
}
