import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-15-retro-server');
}

export default function Realera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-15-retro-server" />;
}
