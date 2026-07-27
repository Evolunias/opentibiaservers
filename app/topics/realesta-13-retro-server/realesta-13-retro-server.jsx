import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-retro-server');
}

export default function Realesta13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-retro-server" />;
}
