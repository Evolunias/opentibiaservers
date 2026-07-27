import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-retro-server');
}

export default function Evolera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-retro-server" />;
}
