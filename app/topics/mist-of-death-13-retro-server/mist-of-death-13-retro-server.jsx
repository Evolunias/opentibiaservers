import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-retro-server');
}

export default function MistOfDeath13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-retro-server" />;
}
