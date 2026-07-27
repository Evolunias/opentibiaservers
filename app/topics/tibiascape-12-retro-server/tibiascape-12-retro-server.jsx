import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-retro-server');
}

export default function Tibiascape12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-retro-server" />;
}
