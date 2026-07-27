import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-retro-server');
}

export default function Tibiascape11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-retro-server" />;
}
