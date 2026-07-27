import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-retro-server');
}

export default function Realesta15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-retro-server" />;
}
