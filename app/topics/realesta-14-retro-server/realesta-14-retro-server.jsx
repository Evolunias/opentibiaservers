import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-retro-server');
}

export default function Realesta14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-retro-server" />;
}
