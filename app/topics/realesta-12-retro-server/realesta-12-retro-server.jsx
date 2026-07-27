import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-retro-server');
}

export default function Realesta12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-retro-server" />;
}
