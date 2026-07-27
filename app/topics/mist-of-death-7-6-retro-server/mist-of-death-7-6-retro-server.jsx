import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-6-retro-server');
}

export default function MistOfDeath76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-6-retro-server" />;
}
