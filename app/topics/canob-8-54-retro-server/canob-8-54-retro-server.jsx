import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-retro-server');
}

export default function Canob854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-retro-server" />;
}
