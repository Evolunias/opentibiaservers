import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-12-retro-server');
}

export default function MistOfDeath12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-12-retro-server" />;
}
