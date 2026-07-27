import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-retro-server');
}

export default function Evolera772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-retro-server" />;
}
