import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-retro-server');
}

export default function Nostalther71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-retro-server" />;
}
