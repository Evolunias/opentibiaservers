import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-retro-server');
}

export default function Tibiascape84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-retro-server" />;
}
