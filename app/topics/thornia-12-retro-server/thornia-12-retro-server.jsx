import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-retro-server');
}

export default function Thornia12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-retro-server" />;
}
