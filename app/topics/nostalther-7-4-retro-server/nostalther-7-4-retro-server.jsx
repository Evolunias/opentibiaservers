import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-4-retro-server');
}

export default function Nostalther74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-4-retro-server" />;
}
