import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-retro-server');
}

export default function Realera14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-retro-server" />;
}
