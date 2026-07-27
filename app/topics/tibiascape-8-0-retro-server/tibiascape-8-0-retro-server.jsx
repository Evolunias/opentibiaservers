import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-retro-server');
}

export default function Tibiascape80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-retro-server" />;
}
