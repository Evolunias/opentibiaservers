import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-retro-server');
}

export default function Evolera15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-retro-server" />;
}
