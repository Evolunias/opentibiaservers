import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-retro-server');
}

export default function Realera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-retro-server" />;
}
