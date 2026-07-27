import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-retro-server');
}

export default function Tibiascape81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-retro-server" />;
}
