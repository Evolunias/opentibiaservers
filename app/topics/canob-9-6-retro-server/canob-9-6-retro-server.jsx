import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-retro-server');
}

export default function Canob96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-retro-server" />;
}
