import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-retro-server');
}

export default function Realera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-retro-server" />;
}
