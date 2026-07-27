import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-retro-server');
}

export default function Canob84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-retro-server" />;
}
