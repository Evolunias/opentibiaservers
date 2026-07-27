import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-retro-server');
}

export default function Evolunia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-retro-server" />;
}
