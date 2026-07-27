import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-retro-server');
}

export default function Evolunia80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-retro-server" />;
}
