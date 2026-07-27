import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-retro-server');
}

export default function Nostalther80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-retro-server" />;
}
