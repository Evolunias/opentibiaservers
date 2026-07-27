import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-retro-server');
}

export default function MistOfDeath15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-retro-server" />;
}
