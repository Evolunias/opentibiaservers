import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-retro-server');
}

export default function Evolunia13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-retro-server" />;
}
