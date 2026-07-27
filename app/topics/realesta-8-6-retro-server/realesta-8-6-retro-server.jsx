import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-retro-server');
}

export default function Realesta86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-retro-server" />;
}
