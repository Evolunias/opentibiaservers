import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-retro-server');
}

export default function Canob11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-retro-server" />;
}
