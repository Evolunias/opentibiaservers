import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-retro-server');
}

export default function MistOfDeath1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-retro-server" />;
}
