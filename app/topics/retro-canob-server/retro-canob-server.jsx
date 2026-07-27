import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-canob-server');
}

export default function RetroCanobServerKeywordPage() {
  return <StaticKeywordPage slug="retro-canob-server" />;
}
