import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-retro-server');
}

export default function Evolunia12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-retro-server" />;
}
