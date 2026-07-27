import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-retro-server');
}

export default function Evolunia71RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-retro-server" />;
}
