import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-retro-server');
}

export default function Tibiascape13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-retro-server" />;
}
