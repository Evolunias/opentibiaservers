import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-retro-server');
}

export default function Nostalther81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-retro-server" />;
}
