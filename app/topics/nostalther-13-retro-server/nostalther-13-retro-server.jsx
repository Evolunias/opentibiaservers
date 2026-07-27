import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-retro-server');
}

export default function Nostalther13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-retro-server" />;
}
