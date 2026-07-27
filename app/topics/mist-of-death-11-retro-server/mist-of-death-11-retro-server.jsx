import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-retro-server');
}

export default function MistOfDeath11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-retro-server" />;
}
