import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-retro-server');
}

export default function Nostalther11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-retro-server" />;
}
