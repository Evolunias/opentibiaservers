import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-retro-server');
}

export default function Realera12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-retro-server" />;
}
