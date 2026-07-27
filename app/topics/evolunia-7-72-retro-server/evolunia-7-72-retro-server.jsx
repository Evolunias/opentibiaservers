import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-retro-server');
}

export default function Evolunia772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-retro-server" />;
}
