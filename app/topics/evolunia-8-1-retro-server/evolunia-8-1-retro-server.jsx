import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-retro-server');
}

export default function Evolunia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-retro-server" />;
}
