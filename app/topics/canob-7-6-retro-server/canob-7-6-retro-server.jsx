import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-retro-server');
}

export default function Canob76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-retro-server" />;
}
