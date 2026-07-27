import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-retro-server');
}

export default function Evolunia14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-retro-server" />;
}
