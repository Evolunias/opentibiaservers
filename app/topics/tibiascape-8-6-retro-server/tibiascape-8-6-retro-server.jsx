import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-retro-server');
}

export default function Tibiascape86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-retro-server" />;
}
