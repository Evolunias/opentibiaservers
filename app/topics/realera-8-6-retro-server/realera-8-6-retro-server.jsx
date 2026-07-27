import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-retro-server');
}

export default function Realera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-retro-server" />;
}
