import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-retro-server');
}

export default function Realera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-retro-server" />;
}
