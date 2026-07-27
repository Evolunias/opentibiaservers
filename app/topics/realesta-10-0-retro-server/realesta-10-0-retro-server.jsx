import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-retro-server');
}

export default function Realesta100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-retro-server" />;
}
