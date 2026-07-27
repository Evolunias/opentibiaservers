import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-retro-server');
}

export default function Realera13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-retro-server" />;
}
